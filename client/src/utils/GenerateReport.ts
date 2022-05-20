import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Food } from "../models/entities/Food";

const generateFoodReport = (foods: Food[], reataurantName: string) => {
  const doc = new jsPDF();

  const tableColumn = [["Id", "Name", "Price", "Description", "Category"]];
  const tableRows = [] as any[];

  foods.forEach((food, index) => {
    const ticketData = [
      index + 1,
      food.name,
      food.price,
      food.description,
      food.category,
    ];
    tableRows.push(ticketData);
  });

  autoTable(doc, {
    head: tableColumn,
    body: tableRows,
    startY: 20,
    styles: { minCellHeight: 20 },
  });
  const date = Date().split(" ");
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.text(`Menu of ${reataurantName} - ${dateStr}`, 14, 15);
  doc.save(`Menu_issued_at_${dateStr}.pdf`);
};

export default generateFoodReport;
