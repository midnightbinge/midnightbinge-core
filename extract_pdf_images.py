import fitz # PyMuPDF
import sys
import os

def extract_images(pdf_path, output_dir):
    try:
        doc = fitz.open(pdf_path)
        for i in range(len(doc)):
            page = doc.load_page(i)
            pix = page.get_pixmap(dpi=150) # High quality extraction
            output_path = os.path.join(output_dir, f"story_page_{i+1}.png")
            pix.save(output_path)
            print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_images(sys.argv[1], sys.argv[2])
