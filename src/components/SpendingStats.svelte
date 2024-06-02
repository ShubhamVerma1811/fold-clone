<script>
	export let cat;
	export let totalSpendings;
</script>

<div class={`flex my-2 relative rounded-md flex-row items-center justify-between p-4`}>
	<p class="text-lg font-bold text-[#20294C]">{cat.name}</p>
	<p class="text-lg text-[#20294C]">
		- {cat.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
	</p>

	<div
		class={`absolute -mx-4  bg-slate-500 opacity-25 h-12 rounded-md`}
		style={`width: ${Math.floor((cat.amount / totalSpendings) * 100)}%; `}
	/>
</div>
