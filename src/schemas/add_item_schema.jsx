import * as Yup from "yup";

const add_item_schema = Yup.object({
      name: Yup.string()
            .trim()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name cannot exceed 50 characters")
            .matches(/^[A-Za-z]+$/, "Name can only contain letters"),
      category: Yup.string().required("Category is required"),
      price: Yup.string()
            .trim()
            .required("Price is required")
            .matches(/[0-9]/, "Price can only contain numbers"),
      details: Yup.string()
            .trim()
            .required("Details is required")
            .matches(/^[A-Za-z]+$/, "Details can only contain letters"),
});

export default add_item_schema;
