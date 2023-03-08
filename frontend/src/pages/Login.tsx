import TextField from "@mui/material/TextField";
import { useState } from "react";
import Joi from "joi";
import EarbudsImage from "../Images/AuthenticationWorkflow/earbuds.webp";
import { useNavigate } from "react-router-dom";
import { easeIn, motion } from "framer-motion";

interface ErrorProps {
  email: string | undefined;
  password: string | undefined;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorProps>({
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

  return (
    <motion.main exit={{opacity: 0}} className="lg:grid grid-cols-[auto_45%] h-[100vh] overflow-hidden">
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: easeIn } }}
        className="hidden lg:block"
      >
        <img className="w-full h-full object-cover" src={EarbudsImage} />
      </motion.figure>
      <section className="lg:px-[30px]">
        <motion.p initial={{ opacity: 0 }} animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: easeIn, delay: 0.4 },
            }} className="font-bold text-[#fc6e20] text-[28px] pl-[20px] mt-[20px] ">
          Budding.
        </motion.p>
        <section className="h-[calc(100vh-80px)] flex flex-col justify-center ">
          <motion.header initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5, ease: easeIn, delay: 0.4 },
            }} className="text-[24px] text-center font-medium mb-[30px]">
            Log In to Your Account
          </motion.header>
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
              <button className="h-[50px] w-full bg-[#fc6e20] rounded-[10px] text-[20px] font-semibold text-white">
                Log In
              </button>
            </div>
            <p className="px-[20px] mt-[10px]">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
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

export default Login;
