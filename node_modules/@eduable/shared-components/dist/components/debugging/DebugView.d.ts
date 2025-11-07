import React from 'react';
import { DebugSession } from '../../../shared-utils/src/debugging/DebugSession';
interface DebugViewProps {
    session: DebugSession;
    onClose?: () => void;
}
export declare const DebugView: React.FC<DebugViewProps>;
export {};
