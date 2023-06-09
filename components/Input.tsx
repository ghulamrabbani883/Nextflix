interface InputProps {
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
<<<<<<< HEAD
        className="
          block
          rounded-md
          px-6
          pt-4
          pb-1
          w-full
          text-md
          text-black
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
        "
        placeholder=" "
        onChange={onChange}
        type={type}
=======
>>>>>>> a5be511c00a63f6192defcdd6bff169277108513
        value={value}
        type={type}
        onChange={onChange}
        className="block w-full px-6 pt-6 pb-1 text-white rounded-md appearance-none text-md focus:outline-none focus:ring-0 peer"
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

