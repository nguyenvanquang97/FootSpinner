/**
 * Utility functions for handling images
 */

/**
 * Saves an image file to the specified directory and returns the path
 * @param file The file to save
 * @param customFilename Optional custom filename (without extension)
 * @returns The path to the saved image
 */
export const saveImageToFile = async (file: File, customFilename?: string): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Lỗi khi tải lên ảnh');
    }
    
    const data = await response.json();
    return data.path;
  } catch (error) {
    console.error('Error saving image:', error);
    return '';
  }
};

/**
 * Deletes an image file from the specified path
 * @param imagePath The path to the image to delete
 * @returns A boolean indicating whether the deletion was successful
 */
export const deleteImage = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3001/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imagePath }),
    });
    
    if (!response.ok) {
      throw new Error('Lỗi khi xóa ảnh');
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};