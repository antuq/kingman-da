import {
    FilePlus2,
    FolderOpen,
    History,
    Settings2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
    const actions = [
        {
            title: 'Create New DA',
            description: 'Prepare a new disbursement account',
            icon: FilePlus2,
            iconStyle: 'bg-blue-100 text-blue-700',
            to: '/new-da'
        },
        {
            title: 'Open Existing DA',
            description: 'Find a saved account',
            icon: FolderOpen,
            iconStyle: 'bg-emerald-100 text-emerald-700',
            to: '/all-records'
        },
        {
            title: 'Recent DAs',
            description: 'Return to recent work',
            icon: History,
            iconStyle: 'bg-amber-100 text-amber-700',
            to: '/recent'
        },
        {
            title: 'Configure Rates',
            description: 'Manage charges and defaults',
            icon: Settings2,
            iconStyle: 'bg-violet-100 text-violet-700',
            to: '/settings/configure-rates'
        },
    ];

    return (
        <div className="p-2">
            {/* Page heading section */}
            <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Kingman DA
                </h1>

                <h3 className="text-base text-slate-500">
                    Welcome to Kingman DA
                </h3>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-5">
                {actions.map((action) => {
    const Icon = action.icon;

    return (
        <Link
            key={action.title}
            to={action.to}
            className="flex min-h-36 items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${action.iconStyle}`}
            >
                <Icon size={24} strokeWidth={1.8} />
            </span>

            <span className="flex flex-col gap-2 pt-1">
                <strong className="text-base font-semibold text-slate-900">
                    {action.title}
                </strong>

                <span className="text-sm leading-5 text-slate-500">
                    {action.description}
                </span>
            </span>
        </Link>
    );
})}
            </div>
        </div>
    );
}

export default Home;