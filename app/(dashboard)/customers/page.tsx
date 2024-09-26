import { DataTable } from "@/app/components/custom ui/DataTable";
import { columns } from "@/app/components/customers/CustomerColumns";
import { Separator } from "@/app/components/ui/separator";
import Customer from "@/app/lib/models/Customer";
import { connectToDB } from "@/app/lib/mongoDB";


const Customers = async () => {
  await connectToDB()

  const customers = await Customer.find().sort({ createdAt: "desc" })

  return (
    <div className='px-10 py-5'>
      <p className='text-heading2-bold'>Customers</p>
      <Separator className='bg-grey-1 my-5' />
      <DataTable columns={columns} data={customers} searchKey='name'/>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Customers