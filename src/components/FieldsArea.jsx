import Input from "./Input";
import Button from "./Button";

const FieldsArea = ({ field1Ref, field2Ref, field3Ref, onSave }) => {
  return (
    <div className="fields-container">
      <Input ref={field1Ref} label={"Field 1"} type={"text"} required />
      <Input ref={field2Ref} label={"Field 2"} type={"text"} required />
      <Input ref={field3Ref} label={"Field 3"} type={"text"} required />
      <Button label={"Save"} onClick={onSave} />
    </div>
  );
};

export default FieldsArea;
