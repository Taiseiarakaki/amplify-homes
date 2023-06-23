/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HomeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image_url: "",
    price: "",
    untitledfield: "",
    password: "",
    number: "",
    part_number: "",
    inventory: "",
    stock_input: "",
    stock_number_input: "",
  };
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [price, setPrice] = React.useState(initialValues.price);
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [password, setPassword] = React.useState(initialValues.password);
  const [number, setNumber] = React.useState(initialValues.number);
  const [part_number, setPart_number] = React.useState(
    initialValues.part_number
  );
  const [inventory, setInventory] = React.useState(initialValues.inventory);
  const [stock_input, setStock_input] = React.useState(
    initialValues.stock_input
  );
  const [stock_number_input, setStock_number_input] = React.useState(
    initialValues.stock_number_input
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImage_url(initialValues.image_url);
    setPrice(initialValues.price);
    setUntitledfield(initialValues.untitledfield);
    setPassword(initialValues.password);
    setNumber(initialValues.number);
    setPart_number(initialValues.part_number);
    setInventory(initialValues.inventory);
    setStock_input(initialValues.stock_input);
    setStock_number_input(initialValues.stock_number_input);
    setErrors({});
  };
  const validations = {
    image_url: [],
    price: [],
    untitledfield: [],
    password: [],
    number: [],
    part_number: [],
    inventory: [],
    stock_input: [],
    stock_number_input: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          image_url,
          price,
          untitledfield,
          password,
          number,
          part_number,
          inventory,
          stock_input,
          stock_number_input,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Home(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HomeCreateForm")}
      {...rest}
    >
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={image_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image_url: value,
              price,
              untitledfield,
              password,
              number,
              part_number,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              image_url,
              price: value,
              untitledfield,
              password,
              number,
              part_number,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield: value,
              password,
              number,
              part_number,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password: value,
              number,
              part_number,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password,
              number: value,
              part_number,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
      ></TextField>
      <TextField
        label="Part number"
        isRequired={false}
        isReadOnly={false}
        value={part_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password,
              number,
              part_number: value,
              inventory,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.part_number ?? value;
          }
          if (errors.part_number?.hasError) {
            runValidationTasks("part_number", value);
          }
          setPart_number(value);
        }}
        onBlur={() => runValidationTasks("part_number", part_number)}
        errorMessage={errors.part_number?.errorMessage}
        hasError={errors.part_number?.hasError}
        {...getOverrideProps(overrides, "part_number")}
      ></TextField>
      <TextField
        label="Inventory"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={inventory}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password,
              number,
              part_number,
              inventory: value,
              stock_input,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.inventory ?? value;
          }
          if (errors.inventory?.hasError) {
            runValidationTasks("inventory", value);
          }
          setInventory(value);
        }}
        onBlur={() => runValidationTasks("inventory", inventory)}
        errorMessage={errors.inventory?.errorMessage}
        hasError={errors.inventory?.hasError}
        {...getOverrideProps(overrides, "inventory")}
      ></TextField>
      <TextField
        label="Stock input"
        isRequired={false}
        isReadOnly={false}
        value={stock_input}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password,
              number,
              part_number,
              inventory,
              stock_input: value,
              stock_number_input,
            };
            const result = onChange(modelFields);
            value = result?.stock_input ?? value;
          }
          if (errors.stock_input?.hasError) {
            runValidationTasks("stock_input", value);
          }
          setStock_input(value);
        }}
        onBlur={() => runValidationTasks("stock_input", stock_input)}
        errorMessage={errors.stock_input?.errorMessage}
        hasError={errors.stock_input?.hasError}
        {...getOverrideProps(overrides, "stock_input")}
      ></TextField>
      <TextField
        label="Stock number input"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stock_number_input}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              image_url,
              price,
              untitledfield,
              password,
              number,
              part_number,
              inventory,
              stock_input,
              stock_number_input: value,
            };
            const result = onChange(modelFields);
            value = result?.stock_number_input ?? value;
          }
          if (errors.stock_number_input?.hasError) {
            runValidationTasks("stock_number_input", value);
          }
          setStock_number_input(value);
        }}
        onBlur={() =>
          runValidationTasks("stock_number_input", stock_number_input)
        }
        errorMessage={errors.stock_number_input?.errorMessage}
        hasError={errors.stock_number_input?.hasError}
        {...getOverrideProps(overrides, "stock_number_input")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
