<script>
	export let bank;
</script>

<div class="rounded-2xl border overflow-clip m-4 w-fullw">
	<div class="py-4 pb-0 px-3">
		<div class="flex flex-row items-center justify-between">
			<svg
				width="19"
				height="20"
				viewBox="0 0 19 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.22654 4.34444C9.7935 -0.188942 15.3339 -1.36551 17.5511 1.72445C19.7683 4.8144 17.8197 11.0598 13.2527 15.5931C8.68575 20.1601 3.14533 21.335 0.89458 18.2115C-1.28735 15.0896 0.661277 8.87614 5.22654 4.34444Z"
					fill="#F06321"
				/>
				<path
					d="M8.24912 1.92543C7.7456 2.29468 7.24207 2.73107 6.73855 3.2027C2.74226 7.16375 1.06216 12.6035 3.04437 15.3242C5.09202 18.0432 9.99465 17.0361 14.0916 13.0399C16.3088 10.8915 17.7858 8.40577 18.3901 6.08957C18.5579 4.37759 18.323 2.86534 17.5509 1.72402C15.8053 -0.692885 12.044 -0.493156 8.24912 1.92543Z"
					fill="#AE282E"
				/>
				<path
					d="M14.0247 2.42908V2.52978C13.9912 3.10044 13.6554 3.80537 13.0512 4.4096C12.1449 5.28237 10.9364 5.61805 10.4312 5.11621C9.86055 4.57912 10.1979 3.40255 11.1042 2.46264C12.0442 1.5563 13.2526 1.25419 13.7561 1.79128C13.924 1.95912 14.0247 2.16053 14.0247 2.42908ZM10.5336 17.8419C8.38354 19.4532 6.16804 20.2605 4.01801 19.9248C4.92435 19.9584 5.66452 18.9497 6.26874 17.6069C6.87297 16.2306 7.20865 14.955 7.51076 13.7449C7.94714 11.8315 7.98073 10.4888 7.74574 10.1867C7.37649 9.71505 6.57085 9.81743 5.62927 10.3545C5.15931 10.6231 4.55509 10.4552 5.2617 9.58246C6.0002 8.70968 8.8535 6.62677 9.86054 6.29109C11.0035 5.98898 12.2791 6.42537 11.8427 7.66739C11.539 8.57373 7.57791 18.9161 10.5336 17.8419Z"
					fill="white"
				/>
			</svg>
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.46777 18C11.6486 16.423 13.6042 14.577 15.2849 12.5101C15.5287 12.2103 15.5287 11.7896 15.2849 11.4898C13.6042 9.4229 11.6486 7.57698 9.46777 5.99997"
					stroke="#979DB5"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>

		<div class="h-8" />

		<div>
			<p class="font-bold text-2xl text-[#20294C]">
				{bank.name}
			</p>
			<div class="flex flex-row items-center justify-between">
				<p class="font-medium text-sm text-[#676B89]">ACCOUNT NUMBER</p>
				<p class="font-medium text-sm text-[#20294C]">
					{bank.accountNumber}
				</p>
			</div>
		</div>

		<div class="mb-4" />
	</div>

	{#if bank.isWorking}
		<div class="bg-[#AAE4B1] py-2 px-4">
			<p class="font-medium text-sm text-[#136317]">BANK IS WORKING FINE</p>
		</div>
	{:else}
		<div class="bg-[#F0B1B1] py-2 px-4">
			<p class="font-medium text-sm text-[#7F1C1C]">BANK IS NOT WORKING</p>
		</div>
	{/if}
</div>
