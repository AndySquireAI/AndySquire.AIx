#!/usr/bin/env python3
from PIL import Image
import os
from datetime import datetime

def crop_and_save_current_plan():
    """Crop and save the Current Plan image with a new filename"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.42.jpeg')
    
    # This shows "MyHS - CURRENT PLAN" 
    width, height = img.size
    print(f"Current plan original size: {width}x{height}")
    
    # Crop to focus on the PDF content, removing phone interface and borders
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right  
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save with a completely new filename to avoid caching
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    new_filename = f'myhs-current-plan-{timestamp}.jpg'
    cropped.save(f'/home/ubuntu/andysquire-ai/assets/{new_filename}', 'JPEG', quality=95)
    print(f"Current plan saved as: {new_filename} - Size: {cropped.size}")
    return new_filename

def crop_and_save_complete_plan():
    """Crop and save the Complete Plan image with a new filename"""
    img = Image.open('/home/ubuntu/upload/Image14.07.2025at19.49.jpeg')
    
    # This shows both pages "MyHS - COMPLETE PLAN (1 of 2)" and "(2 of 2)"
    width, height = img.size
    print(f"Complete plan original size: {width}x{height}")
    
    # Crop to focus on both PDF pages, removing phone interface and borders
    left = int(width * 0.02)   # Small margin from left
    top = int(height * 0.18)    # Remove top phone UI and Adobe header
    right = int(width * 0.98)   # Small margin from right
    bottom = int(height * 0.88) # Remove bottom toolbar
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save with a completely new filename to avoid caching
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    new_filename = f'myhs-complete-plan-{timestamp}.jpg'
    cropped.save(f'/home/ubuntu/andysquire-ai/assets/{new_filename}', 'JPEG', quality=95)
    print(f"Complete plan saved as: {new_filename} - Size: {cropped.size}")
    return new_filename

if __name__ == "__main__":
    print("Creating new MyHealthStory images with unique filenames...")
    current_filename = crop_and_save_current_plan()
    complete_filename = crop_and_save_complete_plan()
    
    print(f"\nNew image files created:")
    print(f"Current Plan: assets/{current_filename}")
    print(f"Complete Plan: assets/{complete_filename}")
    
    # Write the filenames to a file for the next script to use
    with open('/home/ubuntu/andysquire-ai/new_image_filenames.txt', 'w') as f:
        f.write(f"{current_filename}\n{complete_filename}\n")
    
    print("Image replacement completed successfully!")

