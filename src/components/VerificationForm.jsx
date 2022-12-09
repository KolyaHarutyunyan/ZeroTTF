import { useRef } from "react";
import DocumentUploadingArea from "./DocumentUploadingArea";
import FieldsArea from "./FieldsArea";

const VerificationForm = () => {
  const field1Ref = useRef(null);
  const field2Ref = useRef(null);
  const field3Ref = useRef(null);

  return (
    <div className="verification-form">
      <h1 className="verification-form__title">Verification UI</h1>
      <form>
        <DocumentUploadingArea />
        <FieldsArea
          field1Ref={field1Ref}
          field2Ref={field2Ref}
          field3Ref={field3Ref}
        />
      </form>
    </div>
  );
};

export default VerificationForm;
