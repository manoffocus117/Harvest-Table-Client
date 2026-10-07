import * as Yup from "yup";

const add_item_schema = Yup.object({
      name: Yup.string()
            .trim()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name cannot exceed 50 characters")
            .matches(
                  /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  "Name can only contain letters and spaces",
            ),

      category: Yup.string().required("Category is required"),

      price: Yup.number()
            .typeError("Price must be a number")
            .required("Price is required")
            .positive("Price must be greater than 0")
            .integer("Price must be a whole number"),

      details: Yup.string()
            .trim()
            .required("Details is required")
            .min(10, "Details must be at least 10 characters")
            .max(500, "Details cannot exceed 500 characters"),

      image: Yup.mixed()
            .required("Image is required")
            .test("fileType", "Only image files are allowed", (value) => {
                  return value && value.type.startsWith("image/");
            }),
});

export default add_item_schema;
