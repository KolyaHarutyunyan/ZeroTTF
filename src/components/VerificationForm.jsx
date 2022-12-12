import { useState } from "react";
import { useLocalStorage } from "../hooks";
import { isEmpty } from "../utils";
import DocumentUploadingArea from "./DocumentUploadingArea";
import FieldsArea from "./FieldsArea";
import VERIFICATION_FORM from "../verificationForm.json";

const VerificationForm = () => {
  const [verificationForm, setVerificationForm] = useLocalStorage(
    "verification_form",
    VERIFICATION_FORM
  );
  const [document, setDocument] = useState(verificationForm.document);
  const [fields, setFields] = useState(verificationForm.fields);

  return (
    <div className="verification-form">
      <h1 className="verification-form__title">Verification UI</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!document && isEmpty(fields.map((field) => field.value))) {
            alert(
              "Please upload a Document or fill in one of the Fields to save."
            );
          } else {
            setVerificationForm({ document, fields });
            alert("Verification Form is saved successfully.");
          }
        }}
      >
        <DocumentUploadingArea
          document={document}
          handleChange={setDocument}
        />
        <FieldsArea
          fields={fields}
          handleChange={(field) => {
            setFields(
              fields.map((item) => {
                if (item.name === field.name) {
                  return field;
                }
                return item;
              })
            );
          }}
        />
      </form>
    </div>
  );
};

export default VerificationForm;
