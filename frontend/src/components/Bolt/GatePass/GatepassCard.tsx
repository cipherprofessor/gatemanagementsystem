import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format } from 'date-fns';
import { Clock, Calendar } from 'lucide-react';

interface GatepassCardProps {
  gatepass: {
    id: string;
    purpose: string;
    status: string;
    validFrom: string;
    validUntil: string;
    qrCode: string;
  };
}

export default function GatepassCard({ gatepass }: GatepassCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Gatepass #{gatepass.id}</h3>
          <p className="mt-1 text-sm text-gray-500">{gatepass.purpose}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
          gatepass.status === 'approved' ? 'bg-green-100 text-green-800' :
          gatepass.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {gatepass.status.charAt(0).toUpperCase() + gatepass.status.slice(1)}
        </span>
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>Valid from {format(new Date(gatepass.validFrom), 'PPp')}</span>
      </div>
      
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-1" />
        <span>Valid until {format(new Date(gatepass.validUntil), 'PPp')}</span>
      </div>

      <div className="mt-4 flex justify-center">
        <QRCodeSVG
          value={gatepass.qrCode}
          size={128}
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
  );
}