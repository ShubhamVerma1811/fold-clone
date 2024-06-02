<script>
	export let transaction;
</script>

<div class="rounded-2xl border overflow-clip bg-white">
	<div class="flex flex-row items-center justify-between px-3 py-4">
		<p class="text-lg font-bold text-[#676B89]">{transaction.name}</p>
		<p class="text-base font-bold text-[#676B89]">{transaction.date.toLocaleDateString()}</p>
	</div>
	<div class="flex flex-row border-t-2 items-center justify-between px-3 py-4">
		<div class="inline-flex">
			<span class="font-md mr-1 text-[#979DB5]"> - ₹ </span>
			<p class="text-2xl font-bold text-[#20294C]">
				{transaction.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
			</p>
		</div>
		<div class="rounded-lg overflow-clip py-2 px-3 bg-[#F0F1F5]">
			<p class="text-sm uppercase font-medium text-[#20294C]">
				{transaction.type}
			</p>
		</div>
	</div>
</div>
