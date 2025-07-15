#!/usr/bin/env python3
from PIL import Image
import os
from datetime import datetime

def process_current_plan_jpeg():
    """Process the Current Plan JPEG image"""
    img = Image.open('/home/ubuntu/upload/Image15.07.2025at09.36.JPG')
    
    # This shows "MyHS - CURRENT PLAN" 
    width, height = img.size
    print(f"Current plan JPEG original size: {width}x{height}")
    
    # Crop to focus on the PDF content, removing phone interface and borders
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right  
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save with a unique filename
    new_filename = 'myhs-current-plan-jpeg.jpg'
    cropped.save(f'/home/ubuntu/andysquire-ai/assets/{new_filename}', 'JPEG', quality=95)
    print(f"Current plan saved as: {new_filename} - Size: {cropped.size}")
    return new_filename

def process_complete_plan_jpeg():
    """Process the Complete Plan JPEG image"""
    img = Image.open('/home/ubuntu/upload/Image15.07.2025at09.38.JPEG')
    
    # This shows both pages "MyHS - COMPLETE PLAN (1 of 2)" and "(2 of 2)"
    width, height = img.size
    print(f"Complete plan JPEG original size: {width}x{height}")
    
    # Crop to focus on both PDF pages, removing phone interface and borders
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save with a unique filename
    new_filename = 'myhs-complete-plan-jpeg.jpg'
    cropped.save(f'/home/ubuntu/andysquire-ai/assets/{new_filename}', 'JPEG', quality=95)
    print(f"Complete plan saved as: {new_filename} - Size: {cropped.size}")
    return new_filename

if __name__ == "__main__":
    print("Processing JPEG images for MyHealthStory...")
    current_filename = process_current_plan_jpeg()
    complete_filename = process_complete_plan_jpeg()
    
    print(f"\nNew JPEG image files created:")
    print(f"Current Plan: assets/{current_filename}")
    print(f"Complete Plan: assets/{complete_filename}")
    
    # Write the filenames to a file for the next script to use
    with open('/home/ubuntu/andysquire-ai/jpeg_image_filenames.txt', 'w') as f:
        f.write(f"{current_filename}\n{complete_filename}\n")
    
    print("JPEG image processing completed successfully!")

