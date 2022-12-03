import clsx from "clsx";

const Input = ({ className, label, ...props }) => {
    return (
        <label className={clsx(className, "label")}>
            {label}
            <input {...props} />
        </label>
    );
};

export default Input;