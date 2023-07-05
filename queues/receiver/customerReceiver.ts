import customerRepositories from "../../repository/customerRepositories";

class ReceiveCustomers {
  async receiveCustomerQueue(job: any) {
    const { customer } = job?.data;

    await customerRepositories.createCustomer(customer);
  }
}

export default new ReceiveCustomers();
