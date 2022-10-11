import "./Form.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../Context/Appcontext";

const Form = () => {
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
    window.sessionStorage.setItem("EmailInput", JSON.stringify(word));
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

  useEffect(() => {
    if (ProvinceInput === "") {
      setProvinceInput("Buenos Aires");
    }
  }, [ProvinceInput, setProvinceInput]);
  const ProvinceInputFunction = (event) => {
    const word = event.target.value;
    setProvinceInput(word);
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

  useEffect(() => {
    if (CountryInput === "") {
      setCountryInput("Argentina");
    }
  }, [CountryInput, setCountryInput]);
  const CountryInputFunction = (event) => {
    const word = event.target.value;
    setCountryInput(word);
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
      setAbrir6(false);
      setAbrir7(true);
    } else {
      setAbrir6(false);
      setAbrir7(true);
    }
  };

  return (
    <div className="CheckoutForm-background">
      <div className="CheckoutForm-content">
        <div className="CheckoutForm-C-B1">
          <p className="CF-txt-1">Informacion de contacto</p>
          <div className="CF-INPUT-background">
            <div className="CF-INPUT-B1">
              <input
                className={EmailError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                onChange={EmailInputFunction}
                maxLength="50"
                placeholder=" "
                value={EmailInput}
              />
              <label className="CF-INPUT-label">Email</label>
            </div>
            <div className="CF-INPUT-B2">
              {EmailError && (
                <p className="CF-INPUT-txt-1">Debes ingresar un email válido</p>
              )}
            </div>
          </div>
        </div>
        <div className="CheckoutForm-C-B2">
          <div className="CheckoutForm-C-B2B1">
            <p className="CF-txt-1">Dirección de envío</p>
          </div>
          <div className="CheckoutForm-C-B2B2">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <select
                  className="CF-INPUT-inp-dropdown"
                  onChange={CountryInputFunction}
                  value={CountryInput}
                >
                  <option>Argentina</option>
                </select>
              </div>
              <div className="CF-INPUT-B2"></div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B3">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-background">
                <div className="CF-INPUT-B1">
                  <input
                    className={NameError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                    onChange={NameInputFunction}
                    maxLength="30"
                    placeholder=" "
                    value={NameInput}
                  />
                  <label className="CF-INPUT-label">Nombre</label>
                </div>
                <div className="CF-INPUT-B2">
                  {NameError && (
                    <p className="CF-INPUT-txt-1">Debes ingresar tu nombre/s</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B4">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={SurNameError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={SurNameInputFunction}
                  maxLength="30"
                  placeholder=" "
                  value={SurNameInput}
                />
                <label className="CF-INPUT-label">Apellido</label>
              </div>
              <div className="CF-INPUT-B2">
                {SurNameError && (
                  <p className="CF-INPUT-txt-1">Debes ingresar tu apellido/s</p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B5">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={CompanyError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={CompanyInputFunction}
                  maxLength="70"
                  placeholder=" "
                  value={CompanyInput}
                />
                <label className="CF-INPUT-label">
                  Compañía/Empresa(opcional)
                </label>
              </div>
              <div className="CF-INPUT-B2">
                {CompanyError && (
                  <p className="CF-INPUT-txt-1">
                    La cantidad de caracteres máxima permitida es de 70
                    caracteres
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B6">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={AdressError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={AdressInputFunction}
                  maxLength="70"
                  placeholder=" "
                  value={AdressInput}
                />
                <label className="CF-INPUT-label">Dirección</label>
              </div>
              <div className="CF-INPUT-B2">
                {AdressError && (
                  <p className="CF-INPUT-txt-1">
                    Debes ingresar la dirección de envío
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B7">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={Adress2Error ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={Adress2InputFunction}
                  maxLength="20"
                  placeholder=" "
                  value={Adress2Input}
                />
                <label className="CF-INPUT-label">
                  Departamento, suite, etc. (opcional)
                </label>
              </div>
              <div className="CF-INPUT-B2">
                {Adress2Error && (
                  <p className="CF-INPUT-txt-1">
                    Debes ingresar el número de Departamento/Casa
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B8">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={ZipError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={ZipInputFunction}
                  maxLength="5"
                  placeholder=" "
                  value={ZipInput}
                />
                <label className="CF-INPUT-label">Codigo postal</label>
              </div>
              <div className="CF-INPUT-B2">
                {ZipError && (
                  <p className="CF-INPUT-txt-1">Debes ingresar tu ZIP</p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B9">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={CityError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={CityInputFunction}
                  maxLength="20"
                  placeholder=" "
                  value={CityInput}
                />
                <label className="CF-INPUT-label">Ciudad</label>
              </div>
              <div className="CF-INPUT-B2">
                {CityError && (
                  <p className="CF-INPUT-txt-1">Debes ingresar la ciudad</p>
                )}
              </div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B10">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <select
                  className="CF-INPUT-inp-dropdown"
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
              <div className="CF-INPUT-B2"></div>
            </div>
          </div>
          <div className="CheckoutForm-C-B2B11">
            <div className="CF-INPUT-background">
              <div className="CF-INPUT-B1">
                <input
                  className={PhoneError ? "CF-INPUT-inp-v2" : "CF-INPUT-inp"}
                  onChange={PhoneInputFunction}
                  maxLength="14"
                  placeholder=" "
                  value={PhoneInput}
                />
                <label className="CF-INPUT-label">Telefono</label>
              </div>
              <div className="CF-INPUT-B2">
                {PhoneError && (
                  <p className="CF-INPUT-txt-1">
                    Debes ingresar tu número de telefono (Ej. "
                    <strong>+549</strong>1162621717")
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="CheckoutForm-C-B3">
          <Link to={"/"} className="CheckoutForm-C-B3B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="CheckoutForm-C-svg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p className="CP-txt-5">Volver a la tienda</p>
          </Link>
          <div className="CheckoutForm-C-B3B2">
            <button
              className="CheckoutForm-C-B3B2B1"
              onClick={() => FormValidationFunction()}
            >
              <p className="CP-txt-6">Continuar al pago</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
