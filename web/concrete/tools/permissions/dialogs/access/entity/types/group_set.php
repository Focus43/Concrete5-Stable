<?

defined('C5_EXECUTE') or die("Access Denied.");

$type = PermissionAccessEntityType::getByHandle('group_set');
$url = $type->getAccessEntityTypeToolsURL();

$tp = new TaskPermission();
if (!$tp->canAccessGroupSearch()) { 
	echo(t("You have no access to groups."));
} else { 	

	if ($_REQUEST['filter'] == 'assign') { 
		$pk = PermissionKey::getByHandle('assign_user_groups');
		if (!$pk->validate()) {
			die(t('You have no access to assign groups.'));
		}
	}
	

	$gl = new GroupSetList();
	?>
	<div id="ccm-list-wrapper">
	
	<? if ($gl->getTotal() > 0) { 
	
		foreach ($gl->get() as $gs) { ?>
	
		<div class="ccm-group">
			<div style="background-image: url(<?=ASSETS_URL_IMAGES?>/icons/group.png)" class="ccm-group-inner-indiv">
				<a class="ccm-group-inner-atag" id="g<?=$g['gID']?>" href="javascript:void(0)" onclick="ccm_selectGroupSet(<?=$gs->getGroupSetID()?>)"><?=$gs->getGroupSetDisplayName()?></a>
			</div>
		</div>
	
	<? } ?>
	
	<?
	
	} else { ?>
	
		<p><?=t('No group sets found.')?></p>
		
	<? } ?>
	
	</div>
	
	<script type="text/javascript">
	ccm_selectGroupSet = function(gsID) {	
		$('#ccm-permissions-access-entity-form .btn-group').removeClass('open');
		$.getJSON('<?=$url?>', {
			'gsID': gsID
		}, function(r) {
			jQuery.fn.dialog.hideLoader();			
			jQuery.fn.dialog.closeTop();
			$('#ccm-permissions-access-entity-form input[name=peID]').val(r.peID);	
			$('#ccm-permissions-access-entity-label').html('<div class="alert alert-info">' + r.label + '</div>');	
		});
	}	
	</script>
<? } ?>