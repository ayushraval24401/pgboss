import customerRepositories from "../repository/customerRepositories";

class CustomerController {
  async createUser(data: any) {
    try {
      const customerData = {
        isActive: data.isActive,
        age: data.age,
        name: data.name,
        gender: data.gender,
        company: data.company,
        email: data.email,
        phone: data.phone,
      };
      console.log("Data: ", data);
      const user = await customerRepositories.createCustomer(customerData);
      console.log("Return: ", user);
    } catch (err) {
      console.log("My err: ", err);
    }
  }
}

export default new CustomerController();
