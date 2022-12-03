import Input from "./Input";
import Button from "./Button";

const FieldsArea = () => {
    return (
        <div className="fields-container">
            <Input type={"text"} label={"Field 1"} />
            <Input type={"text"} label={"Field 2"} />
            <Input type={"text"} label={"Field 3"} />
            <Button label={"Save"} />
        </div>
    );
};

export default FieldsArea;