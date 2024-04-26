import { XMarkIcon } from '@heroicons/react/20/solid'

export default function OnDark() {
    return (
        <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm leading-6 text-white">
                <a href="/board">
                    <strong className="font-semibold">서버로부터 정보를 받지 못했습니다.</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    눌러서 새로고침
                </a>
            </p>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
