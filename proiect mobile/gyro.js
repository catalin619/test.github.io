document.getElementsByClassName("id_logic_version").innerHTML = "Logic version = 2019.10.25.0"
window.addEventListener("deviceorienation", on_orentation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function on_orentation_uab(e)
{
  document.getElementById("id_alpha").innerHTML = e.alpha;
  document.getElementById("id_beta").innerHTML = e.beta;
  document.getElementById("id_gamma").innerHTML = e.gamma;

}

function on_montion_uab(e)
{
  document.getElementById("id_acc_x").innerHTML = e.accelerationIncludingGravity.x;
  document.getElementById("id_acc_y").innerHTML = e.accelerationIncludingGravity.y;
  document.getElementById("id_acc_z").innerHTML = e.accelerationIncludingGravity.z;
}
