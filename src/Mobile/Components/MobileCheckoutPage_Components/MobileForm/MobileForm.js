import "./MobileForm.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileForm = () => {
  const {
    setAbrir6,
    setAbrir7,
    EmailInput,
    setEmailInput,
    CountryInput,
    setCountryInput,
    NameInput,
    setNameInput,
    SurNameInput,
    setSurNameInput,
    CompanyInput,
    setCompanyInput,
    AdressInput,
    setAdressInput,
    Adress2Input,
    setAdress2Input,
    ZipInput,
    setZipInput,
    CityInput,
    setCityInput,
    ProvinceInput,
    setProvinceInput,
    PhoneInput,
    setPhoneInput,
  } = useContext(AppContext);

  const [GlobalCheck, setGlobalCheck] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const EmailInputFunction = (event) => {
    const word = event.target.value;
    setEmailInput(word.toLowerCase());
  };
  useEffect(() => {
    var regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(EmailInput) || EmailInput?.length >= 50) {
      setEmailError(true);
      setGlobalCheck(true);
    } else {
      setEmailError(false);
      setGlobalCheck(false);
    }
  }, [EmailInput]);

  const [GlobalCheck2, setGlobalCheck2] = useState(false);
  const [NameError, setNameError] = useState(false);
  const NameInputFunction = (event) => {
    const word = event.target.value;
    setNameInput(word);
  };
  useEffect(() => {
    var regName = /^[a-zA-Z\s]+$/;
    if (
      NameInput?.length >= 30 ||
      NameInput?.length < 3 ||
      NameInput === undefined ||
      !regName.test(NameInput)
    ) {
      setNameError(true);
      setGlobalCheck2(true);
    } else {
      setNameError(false);
      setGlobalCheck2(false);
    }
  }, [NameInput]);

  const [GlobalCheck3, setGlobalCheck3] = useState(false);
  const [SurNameError, setSurNameError] = useState(false);
  const SurNameInputFunction = (event) => {
    const word = event.target.value;
    setSurNameInput(word);
  };
  useEffect(() => {
    var regName = /^[a-zA-Z\s]+$/;
    if (
      SurNameInput?.length >= 30 ||
      SurNameInput?.length < 3 ||
      SurNameInput === undefined ||
      !regName.test(SurNameInput)
    ) {
      setSurNameError(true);
      setGlobalCheck3(true);
    } else {
      setSurNameError(false);
      setGlobalCheck3(false);
    }
  }, [SurNameInput]);

  const [GlobalCheck4, setGlobalCheck4] = useState(false);
  const [CompanyError, setCompanyError] = useState(false);
  const CompanyInputFunction = (event) => {
    const word = event.target.value;
    setCompanyInput(word);
  };
  useEffect(() => {
    if (CompanyInput?.length >= 70) {
      setCompanyError(true);
      setGlobalCheck4(true);
    } else {
      setCompanyError(false);
      setGlobalCheck4(false);
    }
  }, [CompanyInput]);

  const [GlobalCheck5, setGlobalCheck5] = useState(false);
  const [AdressError, setAdressError] = useState(false);
  const AdressInputFunction = (event) => {
    const word = event.target.value;
    setAdressInput(word);
  };
  useEffect(() => {
    if (
      AdressInput?.length >= 70 ||
      AdressInput?.length <= 5 ||
      AdressInput === undefined
    ) {
      setAdressError(true);
      setGlobalCheck5(true);
    } else {
      setAdressError(false);
      setGlobalCheck5(false);
    }
  }, [AdressInput]);

  const [GlobalCheck6, setGlobalCheck6] = useState(false);
  const [Adress2Error, setAdress2Error] = useState(false);
  const Adress2InputFunction = (event) => {
    const word = event.target.value;
    setAdress2Input(word);
  };
  useEffect(() => {
    if (Adress2Input?.length >= 20) {
      setAdress2Error(true);
      setGlobalCheck6(true);
    } else {
      setAdress2Error(false);
      setGlobalCheck6(false);
    }
  }, [Adress2Input]);

  const [GlobalCheck7, setGlobalCheck7] = useState(false);
  const [ZipError, setZipError] = useState(false);
  const ZipInputFunction = (event) => {
    const word = event.target.value;
    setZipInput(word);
  };
  useEffect(() => {
    var regZip = /^[A-Za-z0-9_-]*$/;
    if (
      ZipInput?.length > 5 ||
      ZipInput?.length < 4 ||
      ZipInput === undefined ||
      !regZip.test(ZipInput)
    ) {
      setZipError(true);
      setGlobalCheck7(true);
    } else {
      setZipError(false);
      setGlobalCheck7(false);
    }
  }, [ZipInput]);

  const [GlobalCheck8, setGlobalCheck8] = useState(false);
  const [CityError, setCityError] = useState(false);
  const CityInputFunction = (event) => {
    const word = event.target.value;
    setCityInput(word);
  };
  useEffect(() => {
    var regCity = /^[A-Za-z0-9_-\s]*$/;
    if (
      CityInput?.length > 20 ||
      CityInput?.length < 4 ||
      CityInput === undefined ||
      !regCity.test(CityInput)
    ) {
      setCityError(true);
      setGlobalCheck8(true);
    } else {
      setCityError(false);
      setGlobalCheck8(false);
    }
  }, [CityInput]);

  const ProvinceInputFunction = (event) => {
    const word = event.target.value;
    setProvinceInput(word);
    if (ProvinceInput === null) {
      setProvinceInput("Buenos Aires");
    }
  };

  const [GlobalCheck9, setGlobalCheck9] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const PhoneInputFunction = (event) => {
    const word = event.target.value;
    setPhoneInput(word);
  };
  useEffect(() => {
    var regPhone = /^\+?[0-9]*$/;
    if (
      PhoneInput === undefined ||
      !regPhone.test(PhoneInput) ||
      PhoneInput?.length < 10
    ) {
      setPhoneError(true);
      setGlobalCheck9(true);
    } else {
      setPhoneError(false);
      setGlobalCheck9(false);
    }
  }, [PhoneInput]);

  const CountryInputFunction = (event) => {
    const word = event.target.value;
    setCountryInput(word);
    if (CountryInput === undefined) {
      setCountryInput("Argentina");
    }
  };

  const FormValidationFunction = () => {
    if (
      GlobalCheck === true ||
      GlobalCheck2 === true ||
      GlobalCheck3 === true ||
      GlobalCheck4 === true ||
      GlobalCheck5 === true ||
      GlobalCheck6 === true ||
      GlobalCheck7 === true ||
      GlobalCheck8 === true ||
      GlobalCheck9 === true
    ) {
      setAbrir6(true);
      setAbrir7(false);
    } else {
      setAbrir6(false);
      setAbrir7(true);
    }
  };

  return (
    <div className="MobileForm-background">
      <div className="MobileForm-content">
        <div className="MobileForm-C-B1">
          <p className="MobileForm-txt-1">Informacion de contacto</p>
        </div>
        <div className="MobileForm-C-B2">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                EmailError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={EmailInputFunction}
              maxLength="50"
              placeholder=" "
              value={EmailInput}
              type={"email"}
            />
            <label className="MobileForm-label">Email</label>
          </div>
          {EmailError ? (
            <p className="MobileForm-txt-error">
              Debes ingresar un email válido
            </p>
          ) : null}
        </div>
        <div className="MobileForm-C-B3">
          <p className="MobileForm-txt-1">Informacion de contacto</p>
        </div>
        <div className="MobileForm-C-B4">
          <select
            className="MobileForm-dropdown"
            onChange={CountryInputFunction}
            value={CountryInput}
          >
            <option>Argentina</option>
          </select>
        </div>
        <div className="MobileForm-C-B5">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                NameError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={NameInputFunction}
              maxLength="30"
              placeholder=" "
              value={NameInput}
              type={"text"}
            />
            <label className="MobileForm-label">Nombre</label>
          </div>
          {NameError ? (
            <p className="MobileForm-txt-error">Debes ingresar tu nombre/s</p>
          ) : null}
        </div>
        <div className="MobileForm-C-B6">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                SurNameError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={SurNameInputFunction}
              maxLength="30"
              placeholder=" "
              value={SurNameInput}
              type={"text"}
            />
            <label className="MobileForm-label">Apellido</label>
          </div>
          {SurNameError ? (
            <p className="MobileForm-txt-error">Debes ingresar tu apellido/s</p>
          ) : null}
        </div>
        <div className="MobileForm-C-B7">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                CompanyError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={CompanyInputFunction}
              maxLength="70"
              placeholder=" "
              value={CompanyInput}
              type={"text"}
            />
            <label className="MobileForm-label">
              Compañía/Empresa(opcional)
            </label>
          </div>
          {CompanyError ? (
            <p className="MobileForm-txt-error">
              La cantidad de caracteres máxima permitida es de 70 caracteres
            </p>
          ) : null}
        </div>
        <div className="MobileForm-C-B8">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                AdressError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={AdressInputFunction}
              maxLength="70"
              placeholder=" "
              value={AdressInput}
              type={"text"}
            />
            <label className="MobileForm-label">Dirección</label>
          </div>
          {AdressError ? (
            <p className="MobileForm-txt-error">
              Debes ingresar la dirección de envío
            </p>
          ) : null}
        </div>
        <div className="MobileForm-C-B9">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                Adress2Error
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={Adress2InputFunction}
              maxLength="20"
              placeholder=" "
              value={Adress2Input}
              type={"text"}
            />
            <label className="MobileForm-label">
              Departamento, suite, etc. (opcional)
            </label>
          </div>
          {Adress2Error ? (
            <p className="MobileForm-txt-error">
              Debes ingresar el número de Departamento/Casa
            </p>
          ) : null}
        </div>
        <div className="MobileForm-C-B10">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                ZipError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={ZipInputFunction}
              maxLength="5"
              placeholder=" "
              value={ZipInput}
              type={"number"}
            />
            <label className="MobileForm-label">Codigo postal</label>
          </div>
          {ZipError ? (
            <p className="MobileForm-txt-error">Debes ingresar tu ZIP</p>
          ) : null}
        </div>
        <div className="MobileForm-C-B11">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                CityError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={CityInputFunction}
              maxLength="20"
              placeholder=" "
              value={CityInput}
            />
            <label className="MobileForm-label">Ciudad</label>
          </div>
          {CityError ? (
            <p className="MobileForm-txt-error">Debes ingresar la ciudad</p>
          ) : null}
        </div>
        <div className="MobileForm-C-B12">
          <select
            className="MobileForm-dropdown"
            onChange={ProvinceInputFunction}
            value={ProvinceInput}
          >
            <option>Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>Córdoba</option>
            <option>Corrientes</option>
            <option>Entre Ríos</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuquén</option>
            <option>Río Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Cruz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego</option>
            <option>Tucumán</option>
          </select>
        </div>
        <div className="MobileForm-C-B13">
          <div className="MobileForm-INP-DIV">
            <input
              className={
                PhoneError
                  ? "MobileForm-inp MobileForm-inp-error"
                  : "MobileForm-inp"
              }
              onChange={PhoneInputFunction}
              maxLength="14"
              placeholder=" "
              value={PhoneInput}
              type={"tel"}
            />
            <label className="MobileForm-label">Telefono</label>
          </div>
          {PhoneError ? (
            <p className="MobileForm-txt-error">
              Debes ingresar tu telefono (Ej. "<strong>+549</strong>
              1162621717")
            </p>
          ) : null}
        </div>
        <div className="MobileForm-C-B14">
          <button
            className="MobileForm-btn"
            onClick={() => FormValidationFunction()}
          >
            Continuar al pago
          </button>
        </div>
        <Link to={"/"} className="MobileForm-C-B15">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="MobileForm-svg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <p className="MobileForm-txt-2">Volver a la tienda</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileForm;
