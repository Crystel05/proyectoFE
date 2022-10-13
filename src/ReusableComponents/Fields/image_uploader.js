import React from "react";
import FileUpload from "react-mui-fileuploader"

export default function ImageUploader(){
    const handleFileUploadError = (error) => {
        // Do something...
      }
      
      const handleFilesChange = (files) => {
        // Do something...
      }
    
      return (
        <FileUpload
          multiFile={false}
          disabled={false}
          title=""
          header="Drag to drop"
          leftLabel="or"
          rightLabel="to select files"
          buttonLabel="click here"
          buttonRemoveLabel=""
          maxFileSize={10}
          maxUploadFiles={0}
          maxFilesContainerHeight={357}
          errorSizeMessage={'fill it or move it to use the default error message'}
          allowedExtensions={['jpg', 'jpeg', 'png']}
          onFilesChange={handleFilesChange}
          onError={handleFileUploadError}
          imageSrc={'path/to/custom/image'}
          bannerProps={{ elevation: 0, variant: "outlined" }}
          containerProps={{ elevation: 0, variant: "outlined" }}
        />
      )
}