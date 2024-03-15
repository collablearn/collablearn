<script lang="ts">
	import guild_sample_icon from '$lib/assets/guilde_sample_icon.svg';
	import guild_group_icon from '$lib/assets/guild_group_icons.svg';
	//stilll on going
</script>

<div class="py-[30.5px] px-[30px] bg-white flex flex-col w-full">
	<div class="flex items-center w-full gap-[20px]">
		<div class="">
			<img src={guild_sample_icon} alt="dashboard-card-icon" class="" />
		</div>

		<div class="w-full flex flex-col gap-[36px] h-full p-2">
			<div class="flex flex-col gap-[2px]">
				<span class="font-bold text-main">INFO-GAMERS X</span>
				<span class="text-[15px] text-main">John Dave S. Sequilla</span>
			</div>

			<div class="flex items-center gap-[11px]">
				<img src={guild_group_icon} alt="guild-group-icon" class="" />
				<span class="text-main text-[15px]">7/15</span>
			</div>
		</div>
	</div>
</div>
