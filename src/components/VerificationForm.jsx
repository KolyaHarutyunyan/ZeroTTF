import DocumentUploadingArea from "./DocumentUploadingArea";
import FieldsArea from "./FieldsArea";

const VerificationForm = () => {
    return (
        <div className="verification-form">
            <h1 className="verification-form__title">
                Verification UI
            </h1>
            <form>
                <DocumentUploadingArea />
                <FieldsArea />
            </form>
        </div>
    );
};

export default VerificationForm;