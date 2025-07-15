#!/usr/bin/env python3
from PIL import Image
import os

def crop_current_plan():
    """Crop the current plan image to remove phone interface and watermarks"""
    img = Image.open('assets/myhs-current-plan.jpeg')
    
    # The form content appears to be in the middle section, avoiding the phone UI
    # Based on the image, crop to focus on the PDF content area
    width, height = img.size
    
    # Crop coordinates to remove phone interface and focus on PDF content
    # Top: below the phone status bar and app header
    # Bottom: above the bottom toolbar
    # Left/Right: remove phone bezels
    left = int(width * 0.05)  # Remove left bezel
    top = int(height * 0.25)   # Remove top phone UI
    right = int(width * 0.95)  # Remove right bezel  
    bottom = int(height * 0.85) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('assets/myhs-current-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Current plan cropped: {cropped.size}")

def crop_complete_plan():
    """Crop the complete plan image to show both pages cleanly"""
    img = Image.open('assets/myhs-complete-plan.jpeg')
    
    # This image shows two pages side by side
    # Need to crop to remove phone interface and focus on the PDF content
    width, height = img.size
    
    # Crop coordinates for the two-page view
    left = int(width * 0.05)   # Remove left bezel
    top = int(height * 0.25)    # Remove top phone UI
    right = int(width * 0.95)   # Remove right bezel
    bottom = int(height * 0.85)  # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('assets/myhs-complete-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Complete plan cropped: {cropped.size}")

if __name__ == "__main__":
    os.chdir('/home/ubuntu/andysquire-ai')
    crop_current_plan()
    crop_complete_plan()
    print("Image cropping completed!")

