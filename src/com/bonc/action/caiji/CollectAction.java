package com.bonc.action.caiji;




import java.util.HashMap;
import java.util.List;
import java.util.Map;






import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.bonc.dao.caiji.CollectDao;
import com.bonc.model.caiji.CollectBean;
import com.bonc.model.caiji.CollectzxBean;
import com.bonc.utils.JsonUtils;
import com.bonc.utils.StrutsUtils;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
@Component

public class CollectAction extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 2816546104032220139L;

	@Autowired
	public CollectDao cdao;
	
	public List<CollectBean> cb;
	public List<CollectzxBean> zx;
	

	

	public String collect(){
		from();
		column();
		return "index";
	}


	public String from(){
 
		cb=cdao.getdetail_portrait();
		
		zx=cdao.getcbss_jiekou();
		
	
		return Action.NONE;
	}
public List<CollectBean> getCb() {
		return cb;
	}


	public void setCb(List<CollectBean> cb) {
		this.cb = cb;
	}


	public List<CollectzxBean> getZx() {
		return zx;
	}


	public void setZx(List<CollectzxBean> zx) {
		this.zx = zx;
	}


public String column(){
	return "column";
}
	public CollectDao getCdao() {
		return cdao;
	}

	public void setCdao(CollectDao cdao) {
		this.cdao = cdao;
	}

	

	
	

}
