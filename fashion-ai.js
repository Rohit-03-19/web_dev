// AI Fashion Suggestion System
class FashionAI {
    constructor() {
        this.models = {
            faceApi: null,
            bodyPix: null
        };
        this.colorPalettes = {
            spring: {
                name: "Spring",
                colors: ["#FFB6C1", "#98FB98", "#87CEEB", "#F0E68C", "#DDA0DD"],
                description: "Fresh, warm, and vibrant colors"
            },
            summer: {
                name: "Summer", 
                colors: ["#E6E6FA", "#B0E0E6", "#F0F8FF", "#FFEFD5", "#FFE4E1"],
                description: "Cool, muted, and soft colors"
            },
            autumn: {
                name: "Autumn",
                colors: ["#CD853F", "#D2691E", "#A0522D", "#8B4513", "#DAA520"],
                description: "Deep, warm, and rich colors"
            },
            winter: {
                name: "Winter",
                colors: ["#000080", "#8B0000", "#2F4F4F", "#800080", "#FFFFFF"],
                description: "Bold, cool, and contrasting colors"
            }
        };

        this.outfitDatabase = [
            {
                category: "Dress",
                name: "A-Line Midi Dress",
                bodyShapes: ["triangle", "rectangle"],
                colors: ["navy", "burgundy", "emerald"],
                description: "Flattering silhouette that creates curves"
            },
            {
                category: "Top",
                name: "Wrap Blouse",
                bodyShapes: ["hourglass", "triangle"],
                colors: ["white", "blush", "sage"],
                description: "Emphasizes waist and creates elegant neckline"
            },
            {
                category: "Pants",
                name: "High-Waisted Wide Leg",
                bodyShapes: ["rectangle", "inverted-triangle"],
                colors: ["black", "camel", "navy"],
                description: "Creates curves and elongates legs"
            },
            {
                category: "Jacket",
                name: "Belted Blazer",
                bodyShapes: ["rectangle", "triangle"],
                colors: ["charcoal", "cream", "olive"],
                description: "Defines waist and adds structure"
            }
        ];

        this.fashionTips = {
            hourglass: [
                "Emphasize your waist with belts and fitted clothing",
                "V-necks and scoop necks highlight your proportions",
                "Avoid shapeless or boxy clothing"
            ],
            triangle: [
                "Draw attention upward with statement tops",
                "A-line dresses and skirts balance your silhouette",
                "Boat necks and horizontal stripes on top work well"
            ],
            rectangle: [
                "Create curves with belts and layering",
                "Ruffles and textures add visual interest",
                "Peplum tops and fit-and-flare dresses are flattering"
            ],
            "inverted-triangle": [
                "Balance broad shoulders with wider hips",
                "V-necks help narrow the shoulder line",
                "Straight-leg or wide-leg pants work well"
            ],
            round: [
                "V-necks elongate your neckline",
                "Empire waists are very flattering",
                "Vertical lines and patterns slim your silhouette"
            ],
            oval: [
                "Most styles work well for your balanced features",
                "Focus on colors that complement your skin tone",
                "Experiment with different necklines and silhouettes"
            ]
        };

        this.init();
    }

    async init() {
        try {
            await this.loadModels();
            this.setupEventListeners();
            console.log("Fashion AI initialized successfully");
        } catch (error) {
            console.error("Failed to initialize Fashion AI:", error);
        }
    }

    async loadModels() {
        try {
            // Load face-api.js models
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            console.log("Face detection models loaded");
        } catch (error) {
            console.log("Using fallback face detection");
        }
    }

    setupEventListeners() {
        const imageInput = document.getElementById('imageInput');
        const uploadArea = document.getElementById('uploadArea');
        const cameraBtn = document.getElementById('cameraBtn');
        const analyzeBtn = document.getElementById('analyzeBtn');
        const tryAgainBtn = document.getElementById('tryAgainBtn');

        // File upload
        imageInput.addEventListener('change', (e) => {
            this.handleImageUpload(e.target.files[0]);
        });

        // Drag and drop
        uploadArea.addEventListener('click', () => {
            imageInput.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.backgroundColor = '';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.backgroundColor = '';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleImageUpload(file);
            }
        });

        // Camera capture
        cameraBtn.addEventListener('click', () => {
            this.captureFromCamera();
        });

        // Analysis
        analyzeBtn.addEventListener('click', () => {
            this.analyzeImage();
        });

        // Try again
        tryAgainBtn.addEventListener('click', () => {
            this.resetApp();
        });
    }

    handleImageUpload(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.onload = () => {
                this.showSection('previewSection');
            };
        };
        reader.readAsDataURL(file);
    }

    async captureFromCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'user' } 
            });

            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            video.onloadedmetadata = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0);

                const previewImage = document.getElementById('previewImage');
                previewImage.src = canvas.toDataURL();

                stream.getTracks().forEach(track => track.stop());
                this.showSection('previewSection');
            };
        } catch (error) {
            console.error('Camera access denied:', error);
            alert('Camera access denied. Please upload an image instead.');
        }
    }

    async analyzeImage() {
        this.showSection('loadingSection');

        try {
            const image = document.getElementById('previewImage');
            const results = await this.performAnalysis(image);
            this.displayResults(results);
        } catch (error) {
            console.error('Analysis failed:', error);
            alert('Analysis failed. Please try another image.');
            this.showSection('previewSection');
        }
    }

    async performAnalysis(image) {
        const canvas = document.getElementById('analysisCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Analyze skin tone
        const skinTone = this.analyzeSkinTone(imageData);

        // Analyze face shape (simplified)
        const faceShape = await this.analyzeFaceShape(image);

        // Analyze body shape (simplified)
        const bodyShape = this.analyzeBodyShape(image);

        return {
            skinTone,
            faceShape,
            bodyShape
        };
    }

    analyzeSkinTone(imageData) {
        const data = imageData.data;
        let totalR = 0, totalG = 0, totalB = 0;
        let skinPixels = 0;

        // Simple skin detection based on RGB ranges
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Basic skin color detection
            if (r > 95 && g > 40 && b > 20 && 
                Math.max(r, g, b) - Math.min(r, g, b) > 15 &&
                Math.abs(r - g) > 15 && r > g && r > b) {
                totalR += r;
                totalG += g;
                totalB += b;
                skinPixels++;
            }
        }

        if (skinPixels === 0) {
            return { undertone: 'neutral', season: 'summer' };
        }

        const avgR = totalR / skinPixels;
        const avgG = totalG / skinPixels;
        const avgB = totalB / skinPixels;

        // Determine undertone
        let undertone = 'neutral';
        if (avgR > avgB + 10) {
            undertone = 'warm';
        } else if (avgB > avgR + 10) {
            undertone = 'cool';
        }

        // Map to seasonal palette
        const season = this.mapToSeason(undertone, avgR, avgG, avgB);

        return { undertone, season, rgb: [avgR, avgG, avgB] };
    }

    mapToSeason(undertone, r, g, b) {
        const brightness = (r + g + b) / 3;

        if (undertone === 'warm') {
            return brightness > 150 ? 'spring' : 'autumn';
        } else if (undertone === 'cool') {
            return brightness > 150 ? 'summer' : 'winter';
        } else {
            return brightness > 150 ? 'summer' : 'winter';
        }
    }

    async analyzeFaceShape(image) {
        try {
            const detections = await faceapi.detectSingleFace(image)
                .withFaceLandmarks();

            if (detections) {
                const landmarks = detections.landmarks;
                // Simplified face shape analysis
                return this.calculateFaceShape(landmarks);
            }
        } catch (error) {
            console.log('Face detection failed, using fallback');
        }

        // Fallback to random selection for demo
        const shapes = ['oval', 'round', 'square', 'heart', 'diamond'];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }

    calculateFaceShape(landmarks) {
        // Simplified face shape calculation
        const jawPoints = landmarks.getJawOutline();
        const jawWidth = Math.abs(jawPoints[16].x - jawPoints[0].x);
        const faceHeight = Math.abs(landmarks.getNose()[3].y - jawPoints[8].y);

        const ratio = jawWidth / faceHeight;

        if (ratio > 0.8) return 'round';
        if (ratio < 0.6) return 'oval';
        return 'square';
    }

    analyzeBodyShape(image) {
        // Simplified body shape analysis for demo
        const shapes = ['hourglass', 'triangle', 'rectangle', 'inverted-triangle'];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }

    displayResults(results) {
        // Display profile
        const profileHtml = `
            <div class="profile-item">
                <span class="profile-label">Skin Undertone:</span>
                <span class="profile-value">${results.skinTone.undertone}</span>
            </div>
            <div class="profile-item">
                <span class="profile-label">Face Shape:</span>
                <span class="profile-value">${results.faceShape}</span>
            </div>
            <div class="profile-item">
                <span class="profile-label">Body Shape:</span>
                <span class="profile-value">${results.bodyShape}</span>
            </div>
        `;
        document.getElementById('profileResults').innerHTML = profileHtml;

        // Display color palette
        const palette = this.colorPalettes[results.skinTone.season];
        const paletteHtml = `
            <h4>${palette.name} Palette</h4>
            <p>${palette.description}</p>
            <div class="color-palette">
                ${palette.colors.map(color => `
                    <div class="color-swatch" style="background-color: ${color}"></div>
                `).join('')}
            </div>
        `;
        document.getElementById('colorPalette').innerHTML = paletteHtml;

        // Display outfit suggestions
        const outfits = this.getOutfitSuggestions(results.bodyShape);
        const outfitHtml = outfits.map(outfit => `
            <div class="outfit-item">
                <h4>${outfit.name}</h4>
                <p>${outfit.description}</p>
                <div class="outfit-tags">
                    ${outfit.colors.map(color => `<span class="tag">${color}</span>`).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('outfitSuggestions').innerHTML = outfitHtml;

        // Display fashion tips
        const tips = this.fashionTips[results.bodyShape] || this.fashionTips.oval;
        const tipsHtml = tips.map(tip => `
            <div class="tip-item">${tip}</div>
        `).join('');
        document.getElementById('fashionTips').innerHTML = tipsHtml;

        this.showSection('resultsSection');
    }

    getOutfitSuggestions(bodyShape) {
        return this.outfitDatabase.filter(outfit => 
            outfit.bodyShapes.includes(bodyShape)
        ).slice(0, 3);
    }

    showSection(sectionId) {
        const sections = ['previewSection', 'loadingSection', 'resultsSection'];
        sections.forEach(id => {
            document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
        });
    }

    resetApp() {
        document.getElementById('previewImage').src = '';
        this.showSection('uploadSection');
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== 'uploadSection') {
                section.style.display = 'none';
            }
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FashionAI();
});