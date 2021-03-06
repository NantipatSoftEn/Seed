import React from "react";

const SelectBox = ({ label, values, name, isEditing, previousValue, register, errors }) => {
  return (
    <div className="w-full md:w-1/5 px-3 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-xs mb-2">{label}</label>
      <div className="relative">
        <select
          name={name}
          className="appearance-none block w-full p-1 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          id="grid-state"
          ref={register}>
          {isEditing ? (
            <option key={0} value={previousValue.id}>
              {previousValue.name}
            </option>
          ) : null}
          <LoadOption list={values} previousValue={previousValue} />
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <span style={{ color: "red", fontSize: "0.700em" }}>{errors && errors.message}</span>
    </div>
  );
};

const LoadOption = ({ list, previousValue }) => {
  if (!list) {
    return null;
  }

  return (
    <React.Fragment>
      {list.map((t, index) =>
        previousValue.id !== index + 1 ? (
          <option key={index + 1} value={index + 1}>
            {t.name}
          </option>
        ) : (
          <option key={index + 1} value={index + 1} disabled>
            {t.name}
          </option>
        )
      )}
    </React.Fragment>
  );
};
export default SelectBox;
