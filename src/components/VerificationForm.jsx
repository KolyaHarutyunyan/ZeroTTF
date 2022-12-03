import DocumentUploadingArea from "./DocumentUploadingArea";
import FieldsArea from "./FieldsArea";

const VerificationForm = () => {
    return (
        <div className="verification-form">
            <DocumentUploadingArea />
            <FieldsArea />
        </div>
    );
};

export default VerificationForm;