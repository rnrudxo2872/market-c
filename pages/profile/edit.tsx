import BaseBtn from "@components/baseBtn";
import InputWithLabel from "@components/labelInput";
import Layout from "@components/layout";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { NextPage } from "next";
import { useEffect } from "react";
import { ErrorOption, useForm } from "react-hook-form";

interface IFromData {
  name: string | null;
  email: string | null;
  phone: string | null;
  formError: string | null;
}

interface IResUpdate {
  ok: boolean;
  error?: string;
}

const Edit: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<IFromData>();
  const { user } = useUser();
  const {
    fetchMutation,
    loading,
    data: responseData,
  } = useMutation<IResUpdate>("/api/users/me", {
    method: "PATCH",
  });

  function onValid(formData: IFromData) {
    if (!user) return;
    if (loading) return;

    const { valid, status } = isValid(formData);
    if (!valid && status) {
      return setError("formError", status);
    }

    fetchMutation(formData);
  }

  function isValid(formData: IFromData): {
    valid: boolean;
    status?: ErrorOption;
  } {
    const { name, email, phone } = formData;
    if (name === "") {
      return {
        valid: false,
        status: {
          type: "requerd",
          message: "name is required.",
        },
      };
    }
    if (email === "" && phone === "") {
      return {
        valid: false,
        status: {
          type: "required",
          message: "Email or Phone are required.",
        },
      };
    }

    const {
      profile: { name: prevName, email: prevEmail, phone: prevPhone },
    } = user;
    if (
      name === (prevName ?? "") &&
      email === (prevEmail ?? "") &&
      phone === (prevPhone ?? "")
    ) {
      return {
        valid: false,
        status: {
          type: "disabled",
          message: "이전 정보에서 변경사항이 없습니다.",
        },
      };
    }
    return { valid: true };
  }

  useEffect(() => {
    if (user) {
      user.name ? setValue("name", user.name) : null;
      user.email ? setValue("email", user.email) : null;
      user.phone ? setValue("phone", user.phone) : null;
    }
  }, [setValue, user]);

  useEffect(() => {
    if (responseData && !responseData.ok && responseData.error) {
      setError("formError", { type: "disabled", message: responseData.error });
    }
  }, [responseData, setError]);

  watch(() => clearErrors());

  return (
    <Layout hasBackBtn>
      <div className="pt-10 space-y-5">
        <section className="flex justify-center">
          <div className="aspect-square w-24 bg-slate-400 rounded-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute bottom-0.5 right-1 border border-gray-300 rounded-full bg-white text-gray-600 p-[0.1rem]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </section>
        <section>
          <form
            className="space-y-4 flex flex-col"
            onSubmit={handleSubmit(onValid)}
          >
            <InputWithLabel
              id="name"
              labelText="Name"
              type="text"
              register={register("name")}
            />
            <InputWithLabel
              id="email"
              labelText="Email address"
              type="email"
              register={register("email")}
            />
            <InputWithLabel
              id="phone"
              labelText="Phone number"
              type="phone"
              register={register("phone")}
            />
            {errors.formError ? (
              <span className="text-red-400 mx-auto">
                {errors.formError?.message}
              </span>
            ) : null}
            <BaseBtn OnClick={() => {}}>
              {loading ? "당근 캐는중..." : "완료"}
            </BaseBtn>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Edit;
