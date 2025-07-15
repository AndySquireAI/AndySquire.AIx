#!/usr/bin/env python3
from PIL import Image
import os

def replace_current_plan_image():
    """Replace current plan image with the clean version (no PREVIEW VERSION watermark)"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.42(2).jpeg')
    
    # This shows "MyHS - CURRENT PLAN" without watermarks
    width, height = img.size
    print(f"Current plan original size: {width}x{height}")
    
    # Crop to focus on the PDF content, removing phone interface
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right  
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save directly over the existing file
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-current-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Current plan replaced: {cropped.size}")

def replace_complete_plan_image():
    """Replace complete plan image with the clean version (no PREVIEW VERSION watermark)"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.49(2).jpeg')
    
    # This shows both pages "MyHS - COMPLETE PLAN (1 of 2)" and "(2 of 2)" without watermarks
    width, height = img.size
    print(f"Complete plan original size: {width}x{height}")
    
    # Crop to focus on both PDF pages, removing phone interface
    left = int(width * 0.02)   # Small margin from left
    top = int(width * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save directly over the existing file
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-complete-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Complete plan replaced: {cropped.size}")

if __name__ == "__main__":
    print("Replacing MyHealthStory images with clean versions (no watermarks)...")
    replace_current_plan_image()
    replace_complete_plan_image()
    print("Image replacement completed successfully!")
    print("Images now show clean versions without PREVIEW VERSION watermarks.")

