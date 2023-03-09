import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import Joi from "joi";
import EarbudsImage from "../Images/AuthenticationWorkflow/earbuds.webp";
import { useNavigate } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import server from "../Utils/AxiosInstance";
import jwtDecode from "jwt-decode";
import { UserContext } from "../Context/UserContext";

interface ErrorProps {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState("");
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const validateTextField = (value: string, label: string) => {
    const schema = Joi.object({
      value: Joi.string().min(3).max(20).required().label(label),
    });
    return schema.validate({ value }, { abortEarly: false });
  };
  const validateEmailField = (email: string, label: string) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .max(50)
        .required()
        .label(label),
    });
    return schema.validate({ email }, { abortEarly: false });
  };
  const navigate = useNavigate();

  const onSignUp = async () => {
    setLoading(true);
    if (!errors.email && !errors.password) {
      try {
        setBackendError("");
        const payload = {
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        };
        const { data: user } = await server.post("/users", payload);
        console.log(user);
        setUser(user);
        navigate("/products");
      } catch (err: any) {
        console.log(err);
        if (err.response.status == 400) setBackendError(err.response.data);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.main
      exit={{ opacity: 0 }}
      className="lg:grid grid-cols-[auto_45%] h-[100vh] overflow-hidden"
    >
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: easeIn } }}
        className="hidden lg:block"
      >
        <img className="w-full h-full object-cover" src={EarbudsImage} />
      </motion.figure>
      <section className="lg:px-[30px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: easeIn, delay: 0.4 },
          }}
          className="font-bold text-[#fc6e20] text-[28px] pl-[20px] mt-[20px]"
        >
          Budding.
        </motion.p>
        <section className="h-[calc(100vh-80px)] flex flex-col justify-center">
          <motion.header
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5, ease: easeIn, delay: 0.4 },
            }}
            className="text-[24px] text-center font-medium mb-[30px]"
          >
            Create an Account
          </motion.header>
          {backendError && (
            <p className="text-center text-[red] mb-[10px]">{backendError}</p>
          )}
          <motion.form
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5, ease: easeIn, delay: 0.4 },
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="px-[20px] flex flex-col gap-[20px]">
              <div>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={firstName}
                  error={Boolean(errors.firstName)}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors({
                      ...errors,
                      firstName: validateTextField(e.target.value, "First Name")
                        .error?.details[0].message,
                    });
                  }}
                />
                <p className="text-[14px] text-[red]">{errors.firstName}</p>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastName}
                  error={Boolean(errors.lastName)}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors({
                      ...errors,
                      lastName: validateTextField(e.target.value, "Last Name")
                        .error?.details[0].message,
                    });
                  }}
                />
                <p className="text-[14px] text-[red]">{errors.lastName}</p>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  error={Boolean(errors.email)}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({
                      ...errors,
                      email: validateEmailField(e.target.value, "Email").error
                        ?.details[0].message,
                    });
                  }}
                />
                <p className="text-[14px] text-[red]">{errors.email}</p>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type={"password"}
                  value={password}
                  error={Boolean(errors.password)}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: validateTextField(e.target.value, "Password")
                        .error?.details[0].message,
                    });
                  }}
                />
                <p className="text-[14px] text-[red]">{errors.password}</p>
              </div>
              <button
                onClick={onSignUp}
                className="h-[50px] w-full bg-[#fc6e20] rounded-[10px] text-[20px] font-semibold text-white"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
            <p className="px-[20px] mt-[10px]">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-semibold cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </motion.form>
        </section>
      </section>
    </motion.main>
  );
};

export default SignUp;
