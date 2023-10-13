const InputField = ({ label, type, placeholder,name, value, onChange, error }) => (
    <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        {error && <p className="text-danger mt-1">{error}</p>}
    </div>
);
export default InputField

