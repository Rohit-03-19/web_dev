# AI Fashion Suggestion System

A sophisticated web application that analyzes selfies using AI to provide personalized fashion recommendations based on skin tone, face shape, and body shape.

## Features

- **Smart Image Analysis**: Upload or capture selfies directly in the browser
- **Skin Tone Detection**: Analyzes skin undertones and maps to seasonal color palettes
- **Face Shape Recognition**: Detects facial landmarks to determine face shape
- **Body Shape Analysis**: Identifies body proportions for targeted outfit recommendations
- **Personalized Suggestions**: Provides color palettes, outfit recommendations, and styling tips
- **Privacy-First**: All analysis happens client-side - no images sent to servers

## Technologies Used

- **TensorFlow.js**: For machine learning computations in the browser
- **face-api.js**: For facial landmark detection and analysis
- **HTML5 Canvas**: For image processing and visualization
- **CSS3**: For modern, responsive design
- **Vanilla JavaScript**: For application logic and AI integration

## Quick Start

### Option 1: Simple HTTP Server
```bash
# Navigate to the project directory
cd ai-fashion-suggestion-system

# Start a simple HTTP server (Python 3)
python -m http.server 8000

# Or use Python 2
python -m SimpleHTTPServer 8000

# Visit http://localhost:8000 in your browser
```

### Option 2: Node.js Serve
```bash
# Install serve globally
npm install -g serve

# Serve the application
serve .

# Visit the URL provided by serve (usually http://localhost:3000)
```

### Option 3: Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## File Structure

```
ai-fashion-suggestion-system/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── fashion-ai.js       # Main JavaScript application
├── package.json        # Project dependencies
└── README.md          # This file
```

## How It Works

### 1. Image Capture/Upload
- Users can upload existing photos or capture new selfies
- Supports drag-and-drop functionality
- Camera integration for real-time capture

### 2. AI Analysis Pipeline
- **Skin Tone Analysis**: Uses RGB color analysis to determine undertones
- **Face Shape Detection**: Analyzes facial landmarks and proportions
- **Body Shape Recognition**: Evaluates body proportions and silhouette

### 3. Recommendation Engine
- Maps skin undertones to seasonal color palettes (Spring, Summer, Autumn, Winter)
- Suggests outfits based on body shape and style preferences
- Provides personalized fashion tips for confidence enhancement

## Color Palette System

The system uses a seasonal color analysis approach:

- **Spring**: Fresh, warm, vibrant colors
- **Summer**: Cool, muted, soft colors  
- **Autumn**: Deep, warm, rich colors
- **Winter**: Bold, cool, contrasting colors

## Customization

### Adding New Outfit Suggestions
Edit the `outfitDatabase` array in `fashion-ai.js`:

```javascript
{
    category: "Your Category",
    name: "Item Name",
    bodyShapes: ["hourglass", "triangle"],
    colors: ["color1", "color2"],
    description: "Why this item works"
}
```

### Modifying Color Palettes
Update the `colorPalettes` object with your preferred colors:

```javascript
spring: {
    name: "Spring",
    colors: ["#HEX1", "#HEX2", "#HEX3"],
    description: "Your description"
}
```

### Adding Fashion Tips
Extend the `fashionTips` object for different body shapes:

```javascript
bodyShape: [
    "Tip 1",
    "Tip 2",
    "Tip 3"
]
```

## Browser Compatibility

- Chrome 60+ (recommended)
- Firefox 55+
- Safari 11+
- Edge 79+

Requires support for:
- WebRTC (for camera access)
- Canvas API
- ES6 features
- WebGL (for TensorFlow.js)

## Privacy & Security

- All image processing happens locally in the browser
- No images are uploaded to external servers
- User data is not stored or transmitted
- Camera access requires user permission

## Performance Notes

- First load may take longer while AI models download
- Larger images will take more time to process
- Recommended image size: 400x400 to 800x800 pixels
- Works best with well-lit, front-facing photos

## Troubleshooting

### Camera Not Working
- Check browser permissions for camera access
- Ensure you're serving over HTTPS (required for camera in production)
- Try refreshing the page and granting permissions again

### Analysis Failing
- Ensure the image contains a clear view of the face
- Try with better lighting conditions
- Refresh the page and try again

### Slow Performance
- Clear browser cache
- Close other tabs to free up memory
- Try with a smaller image size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use and modify for your projects.

## Future Enhancements

- Integration with real fashion APIs
- Advanced body shape detection using pose estimation
- Makeup and hairstyle recommendations
- Social sharing features
- User preference learning
- Mobile app version
