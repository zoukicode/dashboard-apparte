import React, { useState } from 'react';

export default function PropertyTable() {
  const data = [
    {
      name: 'Cluster Acacia',
      values: [1, 2, 6, 3, 2, 1],
    },
    {
      name: 'Cluster Abizia',
      values: [2, 2, 5, 3, 4, 6],
    },
    {
      name: 'Cluster Avilla',
      values: [3, 3, 4, 3, 4, 2],
    },
  ];

const [afficher,setaffiche] = useState(null)
  const headers = ['New', 'Cold', 'Warm', 'Hot', 'Success', 'Lost'];

  // Calcul des totaux
  const summary = data.reduce((acc, row) => {
    return acc.map((val, i) => val + row.values[i]);
  }, new Array(headers.length).fill(0));

  const getTotal = (values) => values.reduce((a, b) => a + b, 0);

  return (
    <>
    {/* --  Version mobile tableau -- */}
    <div className="block sm:hidden space-y-4 w-[95%] mx-auto mb-20 text-black">
    <h2 className="text-lg font-semibold mb-4">Property</h2>
        {data.map((element,index)=>(
            <div onClick={()=>{setaffiche(afficher === index?null:index)}} key={index} className={`${afficher === index?'h-50' :'h-15'} transition-all duration-300 cursor-pointer overflow-hidden p-4 rounded-lg shadow bg-white`}>
              <div className='flex justify-between'>
              <p><strong>Nama Property:</strong> {element.name}</p>
          <p><strong>Total:</strong> <span className="font-bold text-black">{element.values.reduce((a, z) => a + z, 0)}</span></p>
              </div>
          {headers.map((header,i)=>(
          <div > 
          <p><strong>{header}</strong>     {element.values[i]}</p>
          </div>
          ))}
          </div>

        ))}
       
    </div>
    
    {/* --  Version tablette & desktop : tableau -- */}
    <div class="w-[95%] mx-auto hidden sm:block bg-white p-4 rounded-xl shadow-md  mb-20">
      <h2 class="text-lg font-semibold mb-4">Property</h2>
      <div>
        <table class="min-w-full text-sm text-left border border-gray-200">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-3 font-medium">Nama Property</th>
            {headers.map((head)=>(
                <th class="px-4 py-3">{head}</th>
            ))}
              <th class="px-4 py-3 font-bold">Total</th>
            </tr>
          </thead>
    <tbody className="text-gray-700">
  {data.map((element, i) => (
    <tr key={i} className="border-b border-gray-200">
      <td className="px-4 py-3">{element.name}</td>

      {element.values.map((eleme, j) => (
        <td key={j} className="px-4 py-3">{eleme}</td>
      ))}

      <td className="px-4 py-3 font-bold">
        {element.values.reduce((a, z) => a + z, 0)}
      </td>
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>
    </>
  );
}
