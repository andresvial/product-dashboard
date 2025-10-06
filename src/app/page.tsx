import { DataTable, Column } from '../packages/ui';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  status: string;
}

const dummyData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Ave',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90210',
    country: 'USA',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 456-7890',
    address: '789 Pine Rd',
    city: 'Chicago',
    state: 'IL',
    zip: '60601',
    country: 'USA',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+1 (555) 321-0987',
    address: '321 Elm St',
    city: 'Houston',
    state: 'TX',
    zip: '77001',
    country: 'USA',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    phone: '+1 (555) 654-3210',
    address: '654 Maple Dr',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    country: 'USA',
    status: 'Pending',
  },
];

const columns: Column<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'phone', header: 'Phone' },
  { key: 'address', header: 'Address' },
  { key: 'city', header: 'City' },
  { key: 'state', header: 'State' },
  { key: 'zip', header: 'Zip' },
  { key: 'country', header: 'Country' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Dashboard</h1>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <DataTable
              data={dummyData}
              columns={columns}
              pageSize={2}
              emptyMessage="No products found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
