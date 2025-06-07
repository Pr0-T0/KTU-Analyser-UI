import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Upload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles : File[]) => {
    if(acceptedFiles.length > 0){
      setFileName(acceptedFiles[0].name);
      console.log(acceptedFiles);
    }
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf' : [],
    }, 
    multiple : false,
  });

  return (
    <div {...getRootProps()} className="flex text-center  h-20 border-2 border-dashed rounded-2xl items-center justify-center text-gray-400 cursor-pointer">
        <input {...getInputProps()}/>
        {
          fileName ? <p className="text-gray-600 text-wrap">{fileName}</p> :
          isDragActive ? <p>Drop Files Here ...</p>:<p>Drag 'n' drop some files here, or click to select files</p>
        }
    </div>
  );
}

export default Upload;