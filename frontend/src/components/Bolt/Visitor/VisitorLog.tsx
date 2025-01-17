import React from 'react';
import { format } from 'date-fns';
import { LogIn, LogOut } from 'lucide-react';

interface VisitorLogProps {
  log: {
    id: string;
    gatepassId: string;
    entryTime?: string;
    exitTime?: string;
    securityNotes?: string;
  };
}

export default function VisitorLog({ log }: VisitorLogProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Visit #{log.id}</h3>
        <span className="text-sm text-gray-500">Pass #{log.gatepassId}</span>
      </div>

      <div className="mt-4 space-y-2">
        {log.entryTime && (
          <div className="flex items-center text-sm text-gray-600">
            <LogIn className="h-4 w-4 mr-2 text-green-500" />
            <span>Entry: {format(new Date(log.entryTime), 'PPp')}</span>
          </div>
        )}
        
        {log.exitTime && (
          <div className="flex items-center text-sm text-gray-600">
            <LogOut className="h-4 w-4 mr-2 text-red-500" />
            <span>Exit: {format(new Date(log.exitTime), 'PPp')}</span>
          </div>
        )}

        {log.securityNotes && (
          <div className="mt-2 text-sm text-gray-500">
            <p className="font-medium">Security Notes:</p>
            <p className="mt-1">{log.securityNotes}</p>
          </div>
        )}
      </div>
    </div>
  );
}