<div class="rounded-2xl border overflow-clip bg-white">
	<div class="flex flex-row items-center justify-between px-3 py-4">
		<p class="text-lg uppercase text-[#676B89]">October 23</p>
	</div>

	<div class="m-4">
		<p class="text-md mb-2 font-medium text-[#676B89]">Incoming</p>
		<div class="flex flex-row border-t-2 items-center py-2">
			<span class="font-md mr-1 text-[#979DB5]"> + </span>
			<p class="text-2xl font-bold text-[#20294C]">
				{Number(10021).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
			</p>
		</div>
	</div>

	<div class="m-4">
		<p class="font-medium text-md mb-2 text-[#676B89]">Outgoing</p>
		<div class="flex flex-row border-t-2 items-center py-2">
			<span class="font-md mr-1 text-[#979DB5]"> - </span>
			<p class="text-2xl font-bold text-[#20294C]">
				{Number(2344).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
			</p>
		</div>
	</div>

	<div class="m-4">
		<p class="text-md mb-2 font-medium text-[#676B89]">Invested</p>
		<div class="flex flex-row border-t-2 items-center py-2">
			<!-- <span class="font-md mr-1 text-[#979DB5]"> - </span> -->
			<p class="text-2xl font-bold text-[#20294C]">
				{Number(231).toLocaleString('en-IN', {
					style: 'currency',
					currency: 'INR'
				})}
			</p>
		</div>
	</div>

	<div class="m-4">
		<p class="text-md mb-2 font-medium text-[#676B89]">Left</p>
		<div class="flex flex-row border-t-2 items-center py-2">
			<!-- <span class="font-md mr-1 text-[#979DB5]"> - </span> -->
			<p class="text-2xl font-bold text-[#20294C]">
				{Number(13).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
			</p>
		</div>
	</div>
</div>
