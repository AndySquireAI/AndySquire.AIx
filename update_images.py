#!/usr/bin/env python3
from PIL import Image
import os

def crop_and_replace_current_plan():
    """Crop the new current plan image (single page) and replace the existing one"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.42.jpeg')
    
    # This image shows the single page form in Adobe Reader
    # Need to crop out the phone interface and focus on the PDF content
    width, height = img.size
    print(f"Original current plan size: {width}x{height}")
    
    # Crop to remove phone interface and focus on the PDF form
    # Based on the image structure, the PDF content is in the center
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.15)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.92) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-current-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Current plan cropped and saved: {cropped.size}")

def crop_and_replace_complete_plan():
    """Crop the new complete plan image (two pages) and replace the existing one"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.49.jpeg')
    
    # This image shows two pages side by side in Adobe Reader
    # Need to crop out the phone interface and focus on both PDF pages
    width, height = img.size
    print(f"Original complete plan size: {width}x{height}")
    
    # Crop to remove phone interface and focus on both PDF pages
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.15)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.92) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save('/home/ubuntu/andysquire-ai/assets/myhs-complete-plan-cropped.jpg', 'JPEG', quality=95)
    print(f"Complete plan cropped and saved: {cropped.size}")

if __name__ == "__main__":
    print("Updating MyHealthStory images with new clean versions...")
    crop_and_replace_current_plan()
    crop_and_replace_complete_plan()
    print("Image replacement completed!")

