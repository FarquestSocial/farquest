import type { ReactNode } from "react";

interface TableProps {
	columnNames?: string[];
	rows: (string | ReactNode)[][];
}

export const Table = ({ columnNames, rows }: TableProps) => {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-left text-white rtl:text-right ">
				{columnNames && <TableHead columnNames={columnNames} />}
				<TableBody rows={rows} />
			</table>
		</div>
	);
};

interface TableHeadProps {
	columnNames: string[];
}

const TableHead = ({ columnNames }: TableHeadProps) => {
	return (
		<thead className="border-b-2 border-b-active border-opacity-50 text-sm uppercase">
			<tr>
				{columnNames.map((columnName, idx) => {
					const isLastColumn = idx === columnNames.length - 1;

					return (
						<th
							scope="col"
							className={`py-3 ${isLastColumn ? "text-right" : ""}`}
							key={columnName}
						>
							{columnName}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

interface TableBodyProps {
	rows: (string | ReactNode)[][];
}

const TableBody = ({ rows }: TableBodyProps) => {
	return (
		<tbody className="font-semibold capitalize">
			{rows?.map((rowItem, idx) => {
				return <TableRow rowItems={rowItem} key={`row-${idx}`} />;
			})}
		</tbody>
	);
};

interface TableRowProps {
	rowItems: (string | ReactNode)[];
}

const TableRow = ({ rowItems }: TableRowProps) => {
	return (
		<tr className="border-b border-b-active border-opacity-50 ">
			{rowItems.map((rowItem, idx) => {
				const isLastColumn = idx === rowItems.length - 1;
				const isFirstColumn = idx === 0;
				const rowItemIsString = typeof rowItem === "string";
				const key = rowItemIsString
					? `row-item-${rowItem}`
					: `row-item-${idx}-node-element`;

				return (
					<td
						className={`py-3 ${isLastColumn ? "pl-2 text-right" : ""} ${
							isFirstColumn ? "whitespace-nowrap pr-2" : ""
						}`}
						key={key}
					>
						{rowItem}
					</td>
				);
			})}
		</tr>
	);
};
