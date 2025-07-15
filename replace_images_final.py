#!/usr/bin/env python3
from PIL import Image
import os

def crop_current_plan():
    """Crop the current plan image (single page) - first attachment"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.42(1).jpeg')
    
    # This shows the single page "MyHS - CURRENT PLAN" 
    width, height = img.size
    print(f"Current plan original size: {width}x{height}")
    
    # Crop to focus on the PDF content, removing phone interface
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.15)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right  
    bottom = int(height * 0.85) # Remove bottom toolbar and interface
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-current-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Current plan saved: {cropped.size}")

def crop_complete_plan():
    """Crop the complete plan image (two pages) - second attachment"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.49(1).jpeg')
    
    # This shows both pages "MyHS - COMPLETE PLAN (1 of 2)" and "(2 of 2)"
    width, height = img.size
    print(f"Complete plan original size: {width}x{height}")
    
    # Crop to focus on both PDF pages, removing phone interface
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.15)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.85) # Remove bottom toolbar and interface
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-complete-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Complete plan saved: {cropped.size}")

if __name__ == "__main__":
    print("Replacing MyHealthStory images with correct clean versions...")
    crop_current_plan()
    crop_complete_plan()
    print("Image replacement completed successfully!")

