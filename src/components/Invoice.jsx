import InvoiceItem from "./InvoiceItem";

export default function Invoice() {
  return (
    <section className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Invoices</h2>

      <div className="grid grid-cols-1 gap-4">
        <InvoiceItem date="April 2025" amount="$49.00" status="Paid" />
        <InvoiceItem date="March 2025" amount="$49.00" status="Paid" />
        <InvoiceItem date="February 2025" amount="$49.00" status="Paid" />
        <InvoiceItem date="January 2025" amount="$49.00" status="Paid" />
      </div>
    </section>
  );
}
