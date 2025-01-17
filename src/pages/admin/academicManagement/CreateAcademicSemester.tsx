import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, yearOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Academic Semester Creating...");
    const name = semesterOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    try {
      const res = await addAcademicSemester(semesterData) as TResponse;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success("Semester Created", { id: toastId });
      }
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <h4>Create Academic Semester</h4>
          <PHSelect label="Name: " name="name" options={semesterOptions} />
          <PHSelect label="Year: " name="year" options={yearOptions} />
          <PHSelect
            label="Start Month: "
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect
            label="End Month: "
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
