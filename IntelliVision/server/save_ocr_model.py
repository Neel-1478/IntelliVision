import cv2
import easyocr
import pickle

class OCRModel:
    def _init_(self):
        self.reader = easyocr.Reader(['en'])

    def process_image(self, image):
        # Preprocess the image for OCR
        if len(image.shape) == 3 and image.shape[2] == 3:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        image = cv2.threshold(image, 130, 255, cv2.THRESH_BINARY)[1]
        image = cv2.medianBlur(image, 3)

        # Perform OCR using EasyOCR
        result = self.reader.readtext(image)
        extracted_text = "\n".join([text[1] for text in result])
        return {"text": extracted_text}

# Initialize and save the OCR model
ocr_model = OCRModel()
pickle_file_path = 'ocr_result.pkl'
with open(pickle_file_path, 'wb') as f:
    pickle.dump(ocr_model, f)

print(f"Model saved to {pickle_file_path}")